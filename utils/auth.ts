// Authentication utility functions

const API_BASE_URL = import.meta.env.PROD ? '' : 'http://localhost:4173';

interface User {
    id: number;
    email: string;
    createdAt: string;
}

interface AuthResponse {
    token: string;
    user: User;
    message: string;
}

export const auth = {
    // Login user
    async login(email: string, password: string): Promise<AuthResponse> {
        const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Login failed');
        }

        const data = await response.json();

        // Store token in localStorage
        localStorage.setItem('auth_token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));

        return data;
    },

    // Signup user
    async signup(email: string, password: string): Promise<{ message: string; user: User }> {
        const response = await fetch(`${API_BASE_URL}/api/auth/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Signup failed');
        }

        return await response.json();
    },

    // Logout user
    logout(): void {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('user');
    },

    // Check if user is authenticated
    isAuthenticated(): boolean {
        return !!localStorage.getItem('auth_token');
    },

    // Get current user
    getUser(): User | null {
        const userStr = localStorage.getItem('user');
        return userStr ? JSON.parse(userStr) : null;
    },

    // Get auth token
    getToken(): string | null {
        return localStorage.getItem('auth_token');
    },

    // Fetch current user from API
    async getCurrentUser(): Promise<User> {
        const token = this.getToken();

        if (!token) {
            throw new Error('No authentication token');
        }

        const response = await fetch(`${API_BASE_URL}/api/auth/me`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            this.logout(); // Clear invalid token
            throw new Error('Authentication failed');
        }

        const data = await response.json();
        localStorage.setItem('user', JSON.stringify(data.user));
        return data.user;
    },
};
