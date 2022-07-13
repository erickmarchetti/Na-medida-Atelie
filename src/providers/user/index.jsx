import { useEffect } from "react"
import { createContext, useState } from "react"
import Api from "../../Api"

export const UserContext = createContext({})

export function UserProvider({ children }) {
    const [user, setUser] = useState(null)
    const [logado, setLogado] = useState(false)

    useEffect(() => {
        const token = window.localStorage.getItem("@user/token")

        setLogado(!!token)
    }, [])

    const pegarToken = () => {
        const token = window.localStorage.getItem("@user/token") || ""
        return token
    }

    const pegarDadosUser = (callback = false) => {
        const token = pegarToken()

        if (!!token) {
            Api.get(`/users/${window.localStorage.getItem("@user/id")}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => {
                setUser(res.data)

                if (callback) {
                    callback(res.data)
                }
            })
        }
    }

    return (
        <UserContext.Provider
            value={{ user, setUser, pegarDadosUser, pegarToken, logado }}
        >
            {children}
        </UserContext.Provider>
    )
}
