import { Authorization } from "../../components/authorization/authorization"

export const Login = ({setToken}) => {
	return (
    <Authorization setToken={setToken}/>
	)
}
