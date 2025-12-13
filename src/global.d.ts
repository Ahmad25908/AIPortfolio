// Type definitions for React 19 compatibility with Next.js
import 'react'

declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            // Ensure all standard HTML elements are available
            // @ts-expect-error - Catch-all for React 19 compatibility
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            [elemName: string]: any
        }
    }
}
