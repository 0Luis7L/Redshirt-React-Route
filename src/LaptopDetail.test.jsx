import {describe, test , expect} from 'vitest'
import { render, screen } from '@testing-library/react';
import LaptopDetails from './pages/LaptopDetails'

describe("render details componets to the user", () => {

    test("render the title page", async () => {
        render(<LaptopDetails />);
        const headingElement = screen.getByText("Provide laptop details below:");
        expect(headingElement).toBeVisible();
    });
});
/*
notes:
*/