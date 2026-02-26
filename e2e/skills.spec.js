import { test, expect } from "@playwright/test";

test.describe("Skills page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/skills");
  });

  test("should show page heading", async ({ page }) => {
    await expect(page.getByText("Expertise", { exact: true }).first()).toBeVisible();
    await expect(page.getByRole("heading", { name: "Skills" })).toBeVisible();
  });

  test("should show category Frontend and skills", async ({ page }) => {
    await expect(page.getByText("Frontend", { exact: true }).first()).toBeVisible();
    await expect(page.getByText("HTML", { exact: true }).first()).toBeVisible();
    await expect(page.getByText("CSS", { exact: true }).first()).toBeVisible();
    await expect(page.getByText("JavaScript", { exact: true }).first()).toBeVisible();
    await expect(page.getByText("React", { exact: true }).first()).toBeVisible();
  });

  test("should show category Backend", async ({ page }) => {
    await expect(page.getByText("Backend", { exact: true }).first()).toBeVisible();
  });

  test("should show category Tools or Editor", async ({ page }) => {
    await expect(page.getByText("Tools", { exact: true }).first()).toBeVisible();
    await expect(page.getByText("Editor", { exact: true }).first()).toBeVisible();
  });

  test("should be reachable from home via nav", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: /skills/i }).first().click();
    await expect(page).toHaveURL(/\/skills/);
    await expect(page.getByRole("heading", { name: "Skills" })).toBeVisible();
  });
});
