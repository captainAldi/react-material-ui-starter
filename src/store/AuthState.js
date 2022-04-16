import { atomWithStorage } from 'jotai/utils'

const LS_KEY_USER = process.env.REACT_APP_LS_KEY_USER
const authStateAtom = atomWithStorage(LS_KEY_USER, {})

export default authStateAtom