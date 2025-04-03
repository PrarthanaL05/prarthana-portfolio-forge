
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
				portfolio: {
					purple: '#8B5CF6',
					darkBlue: '#1E40AF',
					lightBlue: '#60A5FA',
					highlight: '#9333EA',
					lightGray: '#F3F4F6',
					darkGray: '#374151',
					softPink: '#FFC0CB',
					softYellow: '#FEF9C3',
					softGreen: '#DCFCE7',
					softBlue: '#DBEAFE',
					softPurple: '#F3E8FF',
					softOrange: '#FFEDD5',
					pastelBlue: '#A7C7E7',
					pastelGreen: '#C1E1C1',
					pastelYellow: '#FDFD96',
					pastelPink: '#FFB6C1',
					pastelPurple: '#D8BFD8',
					pastelOrange: '#FFD8B1',
					vibrantPink: '#FF66B2',
					vibrantPurple: '#9370DB',
					vibrantBlue: '#4169E1',
					vibrantGreen: '#32CD32',
					vibrantYellow: '#FFD700'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in': {
					'0%': { transform: 'translateX(-100px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' }
				},
				'bounce-slow': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-15px)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-500px 0' },
					'100%': { backgroundPosition: '500px 0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.7s ease-out',
				'slide-in': 'slide-in 0.7s ease-out',
				'pulse-slow': 'pulse-slow 3s infinite',
				'bounce-slow': 'bounce-slow 3s infinite',
				'float': 'float 6s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 15s linear infinite',
				'shimmer': 'shimmer 2s infinite linear'
			},
			fontFamily: {
				sans: ['Poppins', 'sans-serif'],
				heading: ['Playfair Display', 'serif']
			},
			backgroundImage: {
				'gradient-soft': 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',
				'gradient-yellow': 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
				'gradient-pink': 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
				'gradient-blue': 'linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)',
				'gradient-green': 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
				'gradient-purple': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
				'pattern-dots': 'radial-gradient(#8B5CF6 1px, transparent 1px)',
				'pattern-grid': 'linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)',
				'shimmer': 'linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 100%)'
			},
			backgroundSize: {
				'dots-sm': '20px 20px',
				'dots-md': '30px 30px'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
