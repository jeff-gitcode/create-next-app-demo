import { render, screen } from "@testing-library/react";

import Users from "./users";
import { mockUsers } from "./users.mocks";

describe('Users', () => {
    it('should render successfully', () => {
        const props = {
            users: mockUsers.users
        }

        const { baseElement } = render(<Users {...props} />);

        expect(baseElement).toBeTruthy();

        expect(screen.getByRole("link", {name: "1| Leanne Graham"})).toBeInTheDocument();
    });
});