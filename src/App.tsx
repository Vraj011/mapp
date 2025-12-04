import { useEffect, useState } from "react";
import Auth from "./Component/Auth/auth";
import TaskList from "./Component/taskList";
import { supabase } from "./lib/subabaseClient";

function App() {

  const [session, setSession] = useState<any>(null);

  const fetchSession = async () => {
    const currenSession = await supabase.auth.getSession()
    console.log(currenSession)
    setSession(currenSession.data.session)
  }

  useEffect(() => {
    fetchSession()
  }, [])

  const logout = async () => {
    await supabase.auth.signOut()
  }

  return (
    <>
      {session ?
        <>
          <button
            onClick={logout}
            className="cursor-pointer border border-gray-500 p-2 m-3 rounded-xl"
          >Logout</button>

          <TaskList />
        </>
        :
        <Auth />
      }


    </>
  )
}

export default App
