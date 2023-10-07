/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */
import { useGetAccountQuery } from "../redux/api"
import { setToken } from "../redux/authTokenSlice"
import { useDispatch, useSelector } from "react-redux"

export default function Account() {
    const token = useSelector((state) => state.token);
    console.log('Token: ', token);
    const dispatch = useDispatch;

    const {data, error, isLoading} = useGetAccountQuery(token);
    console.log(data);
    if (isLoading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }

    return (
        <div>
            <h1>{`Hello, ${data.firstname} ${data.lastname}`}</h1>
            <section>
                <h2>Checked out:</h2>
                {}
            </section>
        </div>
    )
}