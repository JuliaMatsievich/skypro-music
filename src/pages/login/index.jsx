import { Authorization } from "../../components/authorization/authorization"

export function Login ({user,setUser}) {
	return (
    <Authorization user={user} setUser={setUser}/>
	)
}
