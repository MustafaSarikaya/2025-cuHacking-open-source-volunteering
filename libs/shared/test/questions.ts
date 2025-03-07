import { By, PageElement } from '@serenity-js/web'

export const button = {
  withText: (text: string) =>
    PageElement
      .located(By.cssContainingText('button', text))
      .describedAs(`"${text}" button`),
  withAriaLabel: (label: string) =>
    PageElement
      .located(By.css(`[aria-label="${label}"]`))
      .describedAs(`button with aria-label "${label}"`),
  withRole: (role: string) =>
    PageElement
      .located(By.css(`[role="${role}"]`))
      .describedAs(`button with role ${role}`),
}

export const label = {
  withText: (text: string) =>
    PageElement
      .located(By.cssContainingText('label', text))
      .describedAs(`"${text}" label`),
}

export const input = {
  withLabel: (text: string) =>
    PageElement
      .located(By.cssContainingText('label', text))
      .describedAs(`"${text}" label`),

  withPlaceholder: (placeholder: string) =>
    PageElement
      .located(By.css(`input[placeholder="${placeholder}"]`))
      .describedAs(`"${placeholder}" input field`),
}

export const textArea = {

  withName: (name: string) =>
    PageElement
      .located(By.css(`textarea[name="${name}"]`))
      .describedAs(`"${name}" input field`),
}
