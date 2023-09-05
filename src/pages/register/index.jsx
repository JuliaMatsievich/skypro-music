import { Authorization } from "../../components/authorization/authorization"
export function Register({setToken}) {
	return (
    <Authorization setToken={setToken}/>
	)
}
