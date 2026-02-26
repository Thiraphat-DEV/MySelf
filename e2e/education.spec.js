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
    await expect(page.getByText("Back End Developer")).toBeVisible();
    await expect(page.getByText("Fintechinno Co.,Ltd.")).toBeVisible();

    await expect(page.getByText("Data Scientist")).toBeVisible();
    await expect(page.getByText("BOTNOI GROUP")).toBeVisible();

    await expect(page.getByText("Web Development Specialist")).toBeVisible();
    await expect(page.getByText("Freelancer")).toBeVisible();

    await expect(page.getByText("Bachelor of Science, Information Technology")).toBeVisible();
    await expect(page.getByText("Buriram Rajabhat University")).toBeVisible();
  });

  test("should show tags Work and Education", async ({ page }) => {
    await expect(page.getByText("Work", { exact: true }).first()).toBeVisible();
    await expect(page.getByText("Education", { exact: true }).first()).toBeVisible();
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
