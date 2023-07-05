import { FC, ReactNode } from 'react'

type Props = {

    children:ReactNode
}

const WebShareApi: FC<Props> = ({children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default WebShareApi
