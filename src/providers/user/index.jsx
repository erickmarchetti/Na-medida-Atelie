import { createContext, useState } from "react"
import Api from "../../Api"

export const UserContext = createContext()

export function UserProvider({ children }) {
    const [user, setUser] = useState(null)

    const pegarToken = () => {
        const token = window.localStorage.getItem("@user/token") || ""
        return token
    }

    const pegarDadosUser = async () => {
        const token = pegarToken()

        if (!!token) {
            const response = await Api.get(
                `/users/${window.localStorage.getItem("@user/id")}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            ).then((res) => {
                setUser(res.data)
                return res.data
            })

            return response
        }
    }

    return (
        <UserContext.Provider
            value={{ user, setUser, pegarDadosUser, pegarToken }}
        >
            {children}
        </UserContext.Provider>
    )
}
