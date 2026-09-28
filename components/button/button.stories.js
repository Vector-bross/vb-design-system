import Button from './button.twig'
import './button.css'

export default {
  title: 'Components/Button',
  render: (args) => Button(args),
  argTypes: {
    label: { control: 'text' },
    variant: { control: 'select', options: ['primary', 'secondary'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    url: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  parameters: {
    // Colle ici l'URL du frame Figma du bouton -> comparaison pixel-perfect
    design: { type: 'figma', url: 'PASTE_FIGMA_FRAME_URL_HERE' },
  },
}

export const Primary = { args: { label: 'Envoyer', variant: 'primary', size: 'md' } }
export const Secondary = { args: { label: 'Annuler', variant: 'secondary', size: 'md' } }
export const Large = { args: { label: 'Call to action', variant: 'primary', size: 'lg' } }
export const Disabled = { args: { label: 'Indisponible', variant: 'primary', size: 'md', disabled: true } }
