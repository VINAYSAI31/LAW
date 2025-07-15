import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				 richGreen: '#0e2e2c',
                gold: '#d4af37',
                 cream: '#fdfaf6',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Custom colors for law firm
				navy: {
					DEFAULT: '#0F1A30',
					light: '#1C2B4A',
					dark: '#091222',
				},
				// gold: {
				// 	DEFAULT: '#C9A75C',
				// 	light: '#D6BC7F',
				// 	dark: '#B08E3F',
				// },
				// Deep Emerald Green Color Theme
				
				gold: {
					DEFAULT: '#D4AF37',  // Classic gold
					light: '#f8edb9',   // Light gold
					dark: '#B8860B',    // Dark gold
					darker: '#9A7B0A',  // Darker gold
				},
				darkBrown: {
					DEFAULT: '#8B4513',  // Saddle brown
					light: '#A0522D',   // Sienna
					dark: '#654321',    // Dark brown
					darker: '#5D4037',  // Very dark brown
				},
				cream: {
					DEFAULT: '#FFFDD0',  // Beige/cream
					light: '#FEFEF2',   // Very light cream
					dark: '#F0E68C',    // Darker cream
				},
				// Legacy colors for backward compatibility
				loyalBlue: {
					DEFAULT: '#064E3B', // Map to emerald for compatibility
					light: '#059669',
					dark: '#022C22',
					darker: '#134E4A',
				},
					
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				rust: {
					DEFAULT: '#C75B2A',
					dark: '#A3471F',
					light: '#E07B4F',
				},
			},
			fontFamily: {
				cinzel: ['"Cinzel"', "serif"],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
