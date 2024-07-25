import * as ExpoSQLite from 'expo-sqlite'

const db = ExpoSQLite.openDatabase('sessions.db')

export const initSQLiteDB = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS sessions (localId TEXT PRIMARY KEY NOT NULL, email TEXT NOT NULL, token TEXT NOT NULL);",
                [],
                (_, result) => resolve(result),
                (_, error) => reject(error)
            )
        })
    })
    console.log("retorna la promesa")
    return promise
}

export const insertSession = ({email, localId, token}) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "INSERT INTO sessions (localId, email, token) VALUES (?,?,?)",
                [localId, email, token],
                (_, result) => resolve(result),
                (_, error) => reject(error)
            )
        })
    })
    console.log("insertando registro")
    return promise
}

export const getSession = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * from sessions",
                [],
                (_, result) => resolve(result),
                (_, error) => reject(error)
            )
        })
    })
    console.log("obteniendo la session")
    return promise
}

export const truncateSessionTable = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "DELETE from sessions",
                [],
                (_, result) => resolve(result),
                (_, error) => reject(error)
            )
        })
    })
    console.log("borrando la session")
    return promise
}