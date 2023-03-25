import React ,{ useState } from "react";

export const AuthContext = React.createContext();

function AuthContextProvider({children}) {
    const [authState,setState] = useState({
        isAuth:false,
        token:null
      });
    
      function loginUser(token) {
        setState({
          ...authState,
          isAuth:true,
          token:token
        })
      }
      function logoutUser() {
        setState({
          ...authState,
          isAuth:false,
          token:null
        })
      }

      return <>
    <AuthContext.Provider value={{authState,loginUser,logoutUser}}>
        {children}
    </AuthContext.Provider>
  </>;
}

export default AuthContextProvider;
