import { ModalContentProps } from '.'
import type { Component } from 'solid-js'
import { Button } from '@components/button'
import { Flex } from '@components/flex'
import { Label } from '@components/label'

const FormActions: Component<ModalContentProps> = (props) => {
    const handleSubmit = (e: PointerEvent) => {
        console.log('submitting')
        props.onSubmit(e)
    }

    const handleCancel = (e: PointerEvent) => {
        e.stopPropagation()
        props.onCancel(e)
    }

    return (
        <Flex class="gap-4" alignItems="end" justifyContent="end" flexDirection="row">
            <Button variant="ghost" type="button" onPointerDown={handleCancel}>
                <Label styles="pointer">{props.cancelLabel}</Label>
            </Button>
            <Button variant="accent" type="submit" onPointerDown={handleSubmit}>
                <Label styles="pointer">{props.submitLabel}</Label>
            </Button>
        </Flex>
    )
}

export default FormActions
