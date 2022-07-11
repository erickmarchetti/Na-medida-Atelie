import { createContext, useState } from "react"
import Api from "../../Api"

export const UserContext = createContext({})

export function UserProvider({ children }) {
    const [user, setUser] = useState(null)

    const pegarDadosUser = () => {
        const token = window.localStorage.getItem("@user/token") || ""

        if (!!token) {
            Api.get(`/users/${window.localStorage.getItem("@user/id")}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => {
                setUser(res.data)
            })
        }
    }

    return (
        <UserContext.Provider value={{ user, setUser, pegarDadosUser }}>
            {children}
        </UserContext.Provider>
    )
}
