import { test, expect } from "@playwright/test";

test.describe("Education page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/education");
  });

  test("should show page heading", async ({ page }) => {
    await expect(page.getByText("Timeline", { exact: true }).first()).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Education & Experience" })
    ).toBeVisible();
  });

  test("should show timeline entries", async ({ page }) => {
    await expect(page.getByText("2020 – Present")).toBeVisible();
    await expect(page.getByText("Self-taught Developer")).toBeVisible();
    await expect(page.getByText("Work from Home")).toBeVisible();

    await expect(page.getByText("2021 – 2025")).toBeVisible();
    await expect(page.getByText("Engineering Studies")).toBeVisible();
    await expect(page.getByText("BOATY")).toBeVisible();

    await expect(page.getByText("2022 – 2025")).toBeVisible();
    await expect(page.getByText("Personal Projects")).toBeVisible();
    await expect(page.getByText("Self-study")).toBeVisible();
  });

  test("should show tags Work, Education, Personal", async ({ page }) => {
    await expect(page.getByText("Work", { exact: true }).first()).toBeVisible();
    await expect(page.getByText("Education", { exact: true }).first()).toBeVisible();
    await expect(page.getByText("Personal", { exact: true }).first()).toBeVisible();
  });

  test("should be reachable from home via nav", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: /education/i }).first().click();
    await expect(page).toHaveURL(/\/education/);
    await expect(
      page.getByRole("heading", { name: "Education & Experience" })
    ).toBeVisible();
  });
});
