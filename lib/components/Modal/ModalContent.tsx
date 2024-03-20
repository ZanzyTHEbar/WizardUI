import { ModalContentProps } from '.'
import type { ParentComponent } from 'solid-js'
import FormActions from '@components/Modal/FormActions'
import { DialogAction } from '@components/dialog'

const ModalContent: ParentComponent<ModalContentProps> = (props) => {
    return (
        <DialogAction>
            <form class="p-2" method="dialog">
                {props.children}
                <FormActions
                    cancelLabel={props.cancelLabel}
                    submitLabel={props.submitLabel}
                    onCancel={props.onCancel}
                    onSubmit={props.onSubmit}
                />
            </form>
        </DialogAction>
    )
}

export default ModalContent
