import { render } from "@testing-library/react";

import { mockUser } from "./index.mocks";
import Page from "./[id]";

describe('Page', () => {
    it('should render successfully', () => {
        const props = {
            user: mockUser.user
        }

        const { baseElement } = render(<Page />);

        expect(baseElement).toBeTruthy();
    })
});
