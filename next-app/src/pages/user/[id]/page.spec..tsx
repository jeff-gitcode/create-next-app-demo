import { render } from "@testing-library/react";

import { mockUser } from "./page.mocks";
import User from "./page";

describe('User', () => {
    it('should render successfully', () => {
        const props = {
           user: mockUser.user
        }

        const { baseElement } = render(<User {...props} />);
        
        expect(baseElement).toBeTruthy();
    })
});
