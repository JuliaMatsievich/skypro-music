import { Authorization } from "../../components/authorization/authorization"

export const Register = ({setToken}) => {
	return (
    <Authorization setToken={setToken}/>
	)
}
