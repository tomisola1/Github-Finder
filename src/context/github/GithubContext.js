import axios from "axios";
import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const githubUrl = process.env.REACT_APP_GITHUB_URL;
const githubToken = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const getUsers = async () => {
    setLoading();
    try {
      const response = await axios.get(`${githubUrl}/users`, {
        headers: { Authorization: `token ${githubToken}` },
      });
      const data = response.data;
      dispatch({
        type: "GET_USERS",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const setLoading = () => dispatch({ type: "SET_LOADING" });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        getUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
