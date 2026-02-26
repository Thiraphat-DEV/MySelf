import test, { expect } from "@playwright/test";

test.describe('Contact page', () => {

    test.beforeEach(async ({page}) => {
        await page.goto('/contact');
    });

    test('should show contact email', async ({page}) => {
        await expect(page.getByText('Get in touch', {exact: true}).first()).toBeVisible();
        await expect(page.getByRole('link', { name: /thiraboaty@gmail.com/i })).toBeVisible();
        await expect(page.getByRole('link', { name: /thiraboaty@gmail.com/i }).first()).toHaveAttribute('href', 'mailto:thiraboaty@gmail.com');
        await expect(page.getByRole('link', {name: /thiraboaty@gmail.com/i}).first()).toHaveAttribute('rel', 'noreferrer');
    });

    test('should show motion element', async ({page}) => {
        await expect(page.getByText("I'm always open to new opportunities and collaborations. Whether you have a project in mind or just want to say hello, feel free to reach out.").first()).toBeVisible();
    })

    test('should show contact phone number', async ({page}) => {
        await expect(page.getByRole('link', {name: /0645363079/i})).toBeVisible();
        await expect(page.getByRole('link', {name: /0645363079/i}).first()).toHaveAttribute('href', 'tel:0645363079');
        await expect(page.getByRole('link', {name: /github.com\/Thiraphat-DEV/i}).first()).toHaveAttribute('rel', 'noreferrer');
    })

    test('should show contact github', async ({page}) => {
        await expect(page.getByRole('link', {name: /github.com\/Thiraphat-DEV/i})).toBeVisible();
        await expect(page.getByRole('link', {name: /github.com\/Thiraphat-DEV/i}).first()).toHaveAttribute('href', 'https://github.com/Thiraphat-DEV');
        await expect(page.getByRole('link', {name: /github.com\/Thiraphat-DEV/i}).first()).toHaveAttribute('rel', 'noreferrer');
    });

    test('should show footer my email', async ({page}) => {
        await expect(page.getByText('Email me', {exact: true}).first()).toBeVisible();
    });
});