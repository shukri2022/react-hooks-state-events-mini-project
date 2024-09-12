import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import CategoryFilter from "../components/CategoryFilter";
import { CATEGORIES } from "../data";

test("displays a button for each category", () => {
  const onSelectCategory = jest.fn();
  render(
    <CategoryFilter
      categories={CATEGORIES}
      selectedCategory="All"
      onSelectCategory={onSelectCategory}
    />
  );
  CATEGORIES.forEach((category) => {
    expect(screen.getByText(category)).toBeInTheDocument();
  });
});

test("calls onSelectCategory when a category button is clicked", () => {
  const onSelectCategory = jest.fn();
  render(
    <CategoryFilter
      categories={CATEGORIES}
      selectedCategory="All"
      onSelectCategory={onSelectCategory}
    />
  );

  const workButton = screen.getByText("Work");
  fireEvent.click(workButton);

  expect(onSelectCategory).toHaveBeenCalledWith("Work");
});
