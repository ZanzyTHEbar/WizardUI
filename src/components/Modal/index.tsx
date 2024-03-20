import { JSXElement, ParentComponent } from 'solid-js'
import ModalContent from './ModalContent'
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription,
} from '@components/dialog'
import { Label } from '@components/label'

// TODO: Break out customization of classes and styles into props

export interface ModalEvents {
    onCancel: (e: PointerEvent) => void
    onSubmit: (e: PointerEvent) => void
}

export interface ModalContentProps extends ModalEvents {
    cancelLabel?: string
    submitLabel?: string
}

interface ModalProps extends ModalContentProps {
    id: string
    ariaLabel: string
    title: string
    description: string
    trigger: JSXElement
    open: boolean
    setOpen: (value: boolean) => void
}

const Modal: ParentComponent<ModalProps> = (props) => {
    return (
        <Dialog
            id={props.id}
            open={props.open}
            onOpenChange={props.setOpen}
            aria-label={props.ariaLabel}>
            <DialogTrigger>{props.trigger}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        <Label size="2xl">{props.title}</Label>
                    </DialogTitle>
                    <DialogDescription>{props.description}</DialogDescription>
                </DialogHeader>
                <ModalContent
                    submitLabel={props.submitLabel}
                    cancelLabel={props.cancelLabel}
                    onCancel={props.onCancel}
                    onSubmit={props.onSubmit}>
                    {props.children}
                </ModalContent>
                <DialogFooter />
            </DialogContent>
        </Dialog>
    )
}

export default Modal
