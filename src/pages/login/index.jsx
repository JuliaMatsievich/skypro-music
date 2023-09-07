import { Authorization } from "../../components/authorization/authorization"

export function Login ({setToken}) {
	return (
    <Authorization setToken={setToken}/>
	)
}
