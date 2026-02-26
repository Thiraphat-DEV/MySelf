import { test, expect } from "@playwright/test";

test.describe("Home page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should show hero heading and name", async ({ page }) => {
    await expect(page.getByText("Hi, I'm", { exact: true }).first()).toBeVisible();
    await expect(page.getByRole("heading", { name: "Thiraphat C." })).toBeVisible();
  });

  test("should show intro text", async ({ page }) => {
    await expect(
      page.getByText(/Building clean, performant web experiences with modern tools/)
    ).toBeVisible();
    await expect(
      page.getByText(/Passionate about elegant code and solving complex problems/)
    ).toBeVisible();
  });

  test("should show About Me link", async ({ page }) => {
    await expect(page.getByRole("link", { name: /About Me/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /About Me/i })).toHaveAttribute("href", "/about");
  });

  test("should show GitHub link", async ({ page }) => {
    await expect(page.getByRole("link", { name: /GitHub/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /GitHub/i })).toHaveAttribute(
      "href",
      "https://github.com/Thiraphat-DEV"
    );
    await expect(page.getByRole("link", { name: /GitHub/i })).toHaveAttribute("rel", "noreferrer");
  });

  test("should show Available for work and Thailand", async ({ page }) => {
    await expect(page.getByText("Available for work")).toBeVisible();
    await expect(page.getByText("Thailand")).toBeVisible();
  });

  test("should navigate to About from About Me link", async ({ page }) => {
    await page.getByRole("link", { name: /About Me/i }).click();
    await expect(page).toHaveURL(/\/about/);
  });
});
