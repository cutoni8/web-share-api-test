import { FC, ReactNode } from 'react'

interface Props {
    children: ReactNode
    shareData: ShareData
    onSuccess?: () => void
    onError?: (error?: unknown) => void
    onNonNativeShare?: () => void // handle the cases when a Native share experience isn't available.
    onInteraction?: () => void  //  called when the share button is clicked.
    disabled?: boolean
}

const WebShareApi: FC<Props> = ({ children, shareData, onInteraction, onSuccess, onError, onNonNativeShare, disabled }) => {
    const handleOnClick = async () => {
        onInteraction && onInteraction()
        if (navigator.share) {
            try {
                await navigator.share(shareData)
                onSuccess && onSuccess()
            } catch (err) {
                onError && onError(err)
            }
        } else {
            onNonNativeShare && onNonNativeShare()
        }
    }

    return (
        <button
            onClick={handleOnClick}
            type="button"
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default WebShareApi