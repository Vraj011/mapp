import { supabase } from "@/lib/subabaseClient";
import type { Task } from "@/types/task";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface TaskState{
    items: Task[];
    loading: boolean,
    error: string | null
}

const initialState: TaskState = {
    items: [],
    loading: false,
    error: null
}
// thunks

    export const fetchTasks = createAsyncThunk<Task[], void, {rejectValue: string}>(  
        'tasks/fetchTasks',     
        async(_,{rejectWithValue})=>{
                const {data, error} = await supabase
                .from('task1')
                .select('*')
                .order('created_at', {ascending: false});
                console.log({data, error})
                if(error){
                    return rejectWithValue(error.message);
                }
                return data as Task[];
            }
      )

      export const createTasks = createAsyncThunk<Task, {task:string}, {rejectValue: string}>(
        'tasks/createTasks',
        async({task}, {rejectWithValue})=>{
                const {data, error} = await supabase
                .from('task1')
                .insert([{task, status: 'pending'}])
                .select()
                .single();
                   if(error){
                    return rejectWithValue(error.message);
                }
                return data as Task;
        }
      )

      export const updateTaskStatus = createAsyncThunk<Task,{ id: string; status: string },
            { rejectValue: string }>(
          'tasks/updateTaskStatus',
           async ({ id, status }, { rejectWithValue }) => {
            const { data, error } = await supabase
              .from('task1')
              .update({ status })
              .eq('id', id)
              .select()
              .single();
// eq means 'column equals' to value & .single() to get single row
            if (error) return rejectWithValue(error.message);
            return data as Task;
          });

export const deleteTask = createAsyncThunk<string, { id: string }, { rejectValue: string }>(
  'tasks/deleteTask',
  async ({ id }, { rejectWithValue }) => {
    const { error } = await supabase
      .from('task1')
      .delete()
      .eq('id', id);

    if (error) return rejectWithValue(error.message);
    return id;
  }
);


// slice 
const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        // for fetching tasks
        builder.addCase(fetchTasks.pending,(state)=>{
            state.loading = true
            state.error = null
        })
         builder.addCase(fetchTasks.fulfilled,(state, action)=>{
            state.loading = false
            state.error = null
            state.items = action.payload
        })
         builder.addCase(fetchTasks.rejected,(state, action)=>{
            state.loading = false
            state.error = action.payload || 'Failed to fetch tasks'
        })

        // for creating tasks
        builder.addCase(createTasks.pending,(state)=>{
            state.loading = true
            state.error = null
        })
            builder.addCase(createTasks.fulfilled,(state, action)=>{
            state.loading = false
            state.error = null
            state.items.unshift(action.payload) // add new task at the start
        })
        builder.addCase(createTasks.rejected,(state, action)=>{
            state.loading = false
            state.error = action.payload || 'Failed to create task'
        })

         // updateTaskStatus
    builder.addCase(updateTaskStatus.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateTaskStatus.fulfilled, (state, action) => {
      state.loading = false;
      const idx = state.items.findIndex((t) => t.id === action.payload.id);
      if (idx !== -1) state.items[idx] = action.payload;
    });
    builder.addCase(updateTaskStatus.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload ?? 'Failed to update task';
    });

    // deleteTask
    builder.addCase(deleteTask.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteTask.fulfilled, (state, action) => {
      state.loading = false;
      state.items = state.items.filter((t) => t.id !== action.payload);
    });
    builder.addCase(deleteTask.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload ?? 'Failed to delete task';
    });
    }
})

export default taskSlice.reducer;