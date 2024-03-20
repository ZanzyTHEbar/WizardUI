import { createSignal, onMount, type Component, type JSXElement, createEffect } from 'solid-js'
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from '@components/select'

const themes = [
    'light',
    'dark',
    'cupcake',
    'bumblebee',
    'emerald',
    'corporate',
    'synthwave',
    'retro',
    'cyberpunk',
    'valentine',
    'halloween',
    'garden',
    'forest',
    'aqua',
    'lofi',
    'pastel',
    'fantasy',
    'wireframe',
    'black',
    'luxury',
    'dracula',
    'cmyk',
    'autumn',
    'business',
    'acid',
    'lemonade',
    'night',
    'coffee',
    'winter',
    'dim',
    'nord',
    'sunset',
]

/**
 * @description SelectTheme component
 * @type {Component}
 * @returns {JSXElement} SelectTheme
 */
const SelectTheme: Component = (): JSXElement => {
    const [value, setValue] = createSignal('')

    const themeSelect = () => {
        // check local storage for theme
        const theme = localStorage.getItem('app-theme')

        if (!theme) {
            // set theme
            document.documentElement.setAttribute('data-theme', value())
            localStorage.setItem('app-theme', value())
        } else if (theme === value()) {
            setValue(theme)
            document.documentElement.setAttribute('data-theme', value())
        } else {
            // set theme
            document.documentElement.setAttribute('data-theme', value())
            localStorage.setItem('app-theme', value())
        }
        console.debug('[WizardUI - ThemeSelect - LocalStorage Value]: ', theme)
        console.debug('[WizardUI - ThemeSelect - Current Value]: ', value())
    }

    onMount(() => {
        const theme = localStorage.getItem('app-theme')
        if (!theme) {
            setValue('dark')
        } else {
            setValue(theme)
        }
    })

    createEffect(() => {
        themeSelect()
    })

    return (
        <div class="flex-col">
            <Select
                value={value()}
                onChange={setValue}
                defaultValue={'dark'}
                options={themes}
                placeholder="Select a theme…"
                itemComponent={(props) => (
                    <SelectItem class="" item={props.item}>
                        {props.item.rawValue}
                    </SelectItem>
                )}>
                <SelectTrigger aria-label="themes" class="w-[150px]">
                    <SelectValue<string>>{(state) => state.selectedOption()}</SelectValue>
                </SelectTrigger>
                <SelectContent class="bg-base-100/75 hover:bg-base-200 overflow-y-scroll h-[400px]" />
            </Select>
        </div>
    )
}

export default SelectTheme
