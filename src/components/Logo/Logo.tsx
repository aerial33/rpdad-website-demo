interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
  color?: string
}

const Logo = (props: Props) => {
  // Temp logo from https://logoipsum.com/
  const { loading: loadingFromProps, priority: priorityFromProps, className, color } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'
  return (
    <div className="flex items-center gap-2">
      <svg
        className={className}
        height={180}
        id="b"
        viewBox="0 0 485 511"
        width={180}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#EB6F31"
          d="M293.56 511c-4.87-1.88-9.57-3.27-13.61-5.75-7.93-4.86-10.9-13.03-8.77-21.93 2.63-10.96-1.75-18.28-12.81-20.8-3.5-.8-7.18-.8-10.78-1.1-3.33-.28-6.11-3.88-4.34-6.57 2.28-3.47.17-3.77-2.12-4.6-5.52-2.01-10.97-4.21-16.54-6.08-7.02-2.35-10.87-6.9-10.85-14.5 0-1.17-.12-2.35-.37-3.48-1.88-8.65-5.45-12.15-15.12-7.2-.85.44-1.87.97-2.74.86-6.72-.83-12.37 2.25-17.58 5.58-9.16 5.85-18.37 4.1-27.44.88-4.85-1.74-8.4-1.61-12.05 2.12-3.38 3.44-15.38 4.17-18.87 1.04-1.34-1.2-2.38-3.9-2.06-5.62 1.24-6.6 3.1-13.06 4.68-19.6.25-1 .65-2.38.2-3.1-3.16-5-7.23-9.13-13.15-10.51-4.93-1.15-7.99 2.58-10.91 5.55-5.87 5.95-11.67 12.03-20.1 13.91-3.96.89-8.3.96-12.34.43-4.56-.6-7.74-5.2-7.77-10.07-.08-9.85-.03-19.7-.03-29.3 9.3-1.69 14.7-8.72 15.05-18.12.09-2.35.02-4.71.35-7.67.98-1.9 1.4-3.4 2.32-4.47 5.73-6.61 12.17-6.82 21.06-.83 6.45 4.34 10.35 4.26 16.68-.13-1.09-2.13-2.34-4.13-3.17-6.29-1.4-3.66-2.17-7.61-3.87-11.12-4.13-8.52-11.92-10-20.31-9.87-3.97.06-9.24 4-9.83 7.86-1.26 8.17-2.11 16.4-3.13 24.6-2.27 5.14-4.32 10.4-6.96 15.35-.75 1.4-3.6 2.87-4.9 2.45-1.44-.48-3-2.99-3.16-4.73-.94-11.06 1.25-21.76 3.74-32.52 1.79-7.69 1.95-15.75 3.2-23.58 2.16-13.35 4.9-26.6 6.82-39.99 1.5-10.51 2.17-21.15 3.18-31.73.38-3.97.66-7.95 1-12.73a31.82 31.82 0 0 1 6.43-7.1c.44 1.93.72 3.63.58 5.28-.95 11.28-1.7 22.58-3.06 33.8-1.53 12.63-3.71 25.18-5.47 37.79-1.04 7.48-1.8 15-2.74 22.89 3.1-1.83 5.43-3.7 8.1-4.7 13.03-4.88 28.77 3.04 33.49 16.34 1.34 3.81 2.9 8.17 5.74 10.68 5.48 4.83 6.16 7.66.91 13.12-5.94 6.18-18.72 7.46-26.09 2.61-2.2-1.44-4.3-3.1-6.64-4.24-3.27-1.6-6.78.47-7.21 4-.37 2.97-.33 6.03-1.1 8.88-1.94 7.33-3.65 14.84-11.03 19.14-1.12.65-1.82 2.88-1.86 4.4-.18 7.5-.08 15.01-.08 23.67 1.5 0 3.86.35 6.08-.07 7.93-1.47 13.07-6.9 18.18-12.74 4.57-5.2 9.98-10.89 17.69-8.67 5.44 1.56 10.39 5.19 15.23 8.4 7.5 4.96 9.54 11.13 4.36 19.53-2.24 3.63-2.45 8.53-3.55 12.75 5.99 1.69 9.65-.56 12.64-4.36 5.09-6.48 6.34-6.7 13.22-2.17 7.33 4.81 14.66 6.52 22.88 1.5 4.8-2.93 10.23-5.02 15.6-6.79 3.69-1.2 7.88-.78 11.63-1.84 11.08-3.13 17.82 3.04 18.8 12.58.58 5.6.65 11.9 7.34 14.53 4.56 1.8 9.08 3.8 13.76 5.22 6.23 1.89 12.34 3.56 11.26 10.8 6.92 2.3 13.33 3.8 19.18 6.53 7.98 3.72 10.74 11 8.9 19.74-.75 3.55-1.41 7.28-1.13 10.85.22 2.7 1.26 6.43 3.21 7.68 6.88 4.42 14.62 6.9 22.96 6.18 5.46-.47 7.5-3.28 7.87-8.92.23-3.58 1.09-7.14 1.8-10.68.74-3.75 2.1-7.15 6.54-7.63 5.14-.56 9.34.4 11.75 5.96 2.83 6.54 6.22 8.25 14.62 7.04 5.87-.85 12.04-2.66 13.54-9.64 1.56-7.3-.9-13.6-6.59-18.49-5.21-4.48-5.9-8.4-.34-12.57 5.39-4.07 12.04-6.43 17.26-9.1-1.05-6.47-3.18-13.71-3.17-20.95.03-8.04 1.51-16.18 3.3-24.06 1.34-5.95 4.15-11.61 10.63-13.92 5.26-1.88 7.85-5.68 8.11-11.09 3.36-.88 7.05-.95 9.53-2.72 3.57-2.54 7.03-5.9 9.13-9.7 2.19-3.94 2.71-8.83 4.03-13.55-1.12-.31-3.01-.8-4.87-1.38-7.48-2.34-9.28-7.04-4.63-13.34 3.63-4.93 8.02-9.3 11.81-14.11 3.41-4.32 7.44-5.72 12.4-3.43 2.96-6.14 7.49-3.76 11.77-2.96 1.42.26 3.62.53 4.27-.24.94-1.1.78-3.16 1.1-4.8 1.12-5.53 2.22-11.06 3.38-16.58.47-2.24 1.1-4.46 1.64-6.69-2.72-.38-5.94-1.88-8.05-.91-3.94 1.8-7.88 4.5-10.65 7.82-5.54 6.63-11.94 7.1-19.68 5.45-5.48-1.17-11.25-.87-16.9-1.3-3.1-.23-6.83.41-9.17-1.1-7.7-4.95-13.43-12.72-10.8-23.55 1.9-7.83 3.76-15.78 1.56-24.1-1.23-4.66.26-9.2 3.45-13.02a51.97 51.97 0 0 0 11.14-23.41c1.53-7.47-1.74-13.66-9.01-15.65-9.54-2.6-18.92-2.33-28.2 1.66a43.66 43.66 0 0 1-11.8 2.97c-10.02 1.23-18.53-3.73-27.13-7.71-12.83-5.95-25.45-12.38-38.18-18.54-2.37-1.15-4.04-2.25-3.95-5.51a84.1 84.1 0 0 0-.95-14.45c-1.5-10.08-1.32-14.53-14.28-17.57-4.61-1.09-9.2-2.27-13.79-3.45-11.32-2.89-11.31-2.9-12.38-14.46-7.38 4.48-15.28 4.64-23.6 2.65 1.7 9.1 3.09 17.54 4.9 25.9 3.16 14.47 6.23 28.9 12.58 42.53 4.76 10.22 3.62 11.94-5.98 14.87-.93.29-1.72 1.23-2.64 1.34-3.65.45-8.2 2.5-10.43-1.72a75 75 0 0 1-6.5-17c-3.7-15.03-6.65-30.24-10.22-45.3-2.42-10.25-5.39-20.36-8.05-30.89a47.18 47.18 0 0 1 3.12-3.85c.98 1.14 2.53 2.13 2.87 3.44 5.48 21.36 10.69 42.8 16.25 64.13 1.93 7.41 4.46 14.7 7.18 21.85.55 1.47 3.2 2.12 4.89 3.14.64-1.78 2.08-3.71 1.77-5.3-1.12-5.8-3.03-11.45-4.28-17.23-3.65-16.9-7.17-33.83-10.6-50.78-.76-3.7-.94-7.53-1.4-11.45 7.17-.56 13.74-.96 20.28-1.64 4.4-.46 8.75-1.36 13.13-1.96 3-.4 4.31.98 4.13 4.07-.15 2.69-.03 5.4-.03 8.6 6.54 1.16 13.11 2.1 19.58 3.53 14.6 3.25 18.24 7.65 19.62 22.92.15 1.64 1.18 3.35.88 4.84-1.88 9.44 2.67 13.62 11.01 16.95 14.13 5.65 27.72 12.65 41.52 19.11 6.01 2.82 11.68 2.4 17.31-1.2 11.88-7.58 24.34-5.79 36.58-1.4 9.66 3.47 14 14.16 12.1 25.18-1.7 9.88-6.16 18.3-11.17 26.66-1.1 1.83-1.52 4.25-1.66 6.43-.4 6.05-.35 12.12-.71 18.17-.3 4.98-1.44 9.95-1.3 14.9.13 4.8 4.67 9.67 11.69 8.17 4.13-.89 9.03-.67 12.99.75 8.13 2.93 14.78 1.77 20.7-4.46 5.1-5.36 11-8.5 18.74-8.4 9.05.13 13.83 6.2 11.81 15.67-.44 2.05-1.12 4.5-2.56 5.78-3.64 3.21-3.3 7.2-3.23 11.3.17 9.47-1.05 14.13-12.79 12.93-1.6-.17-3.21-.2-5.13-.31-.1 5.17.38 11.55-7.12 12.11-1.68.13-3.66-3.74-6.07-6.4l-10.34 11.54c2.37 1.15 3.45 1.98 4.64 2.2 6.57 1.2 9.7 3.65 6.24 11.42-2.55 5.73-5.28 11.23-6.83 17.39-1.8 7.18-8.04 9.05-14.24 10.42-2.57.57-4.75.66-4.83 4.32-.03 1.37-2 3.2-3.5 3.94-11.92 5.79-15.68 16.22-17.58 28.5-1.12 7.25-.15 13.82 2.3 20.33 1.01 2.68 3.4 4.79 4.74 7.38 1.05 2.07 1.99 4.51 1.85 6.72-.04.77-3.4 1.47-5.31 1.97-5.5 1.43-11.08 2.53-16.5 4.2-2.47.75-2.8 2.93-.58 4.6 7.24 5.45 8.39 13.2 7.51 21.35-.42 3.96-1.54 8.35-3.77 11.53-6.79 9.65-25.92 10.7-34.19 2.39-1.77-1.78-3.43-3.74-5.43-5.21-.94-.7-3.16-1.03-3.76-.44-.92.89-1.13 2.7-1.3 4.15-.47 4.39-.21 8.94-1.3 13.14-.94 3.6-3.8 6.21-8.15 6.71-5.53.35-10.9.35-16.75.35Z"
        />
        <path
          fill="#B62F88"
          d="M184.92 101.68a50.54 50.54 0 0 1-3.58 4.17c-6.26 7.02-11.98 13.8-17.98 20.32-18.6 20.2-37.3 40.3-55.96 60.44-.8.86-1.63 1.69-2.46 2.5L83.37 210.2a159.57 159.57 0 0 0-6.11 6.9c-4.86 4.36-9.7 8.3-14.42 12.4-16.65 14.44-33.6 28.42-53.7 37.85-2.62 1.22-5.55 1.78-8.73 2.65C0 256.16 0 242.32 0 228c10-6.33 20.4-11.62 29.91-18.2 11.75-8.14 22.93-17.14 34.04-26.16 7.2-5.85 13.85-12.4 21.38-18.86 2.81-2.5 5-4.78 7.5-7.18 10.01-9.21 19.88-18.14 29.39-27.44 13.94-13.63 27.63-27.53 41.75-41.39 1.78-1.94 3.25-3.81 4.72-5.68 12.64-13.28 25.29-26.53 37.9-39.84 4.57-4.83 9.05-9.77 13.56-14.67 8.56-9.3 17.12-18.62 25.78-28.25.54-.33.98-.33 1.76-.33 14.37 18.35 28.08 36.96 42.53 54.97 13.28 16.54 27.28 32.51 41.12 48.6a773.36 773.36 0 0 0 20.79 22.96c11.5 12.34 23 24.7 34.78 36.79a827.18 827.18 0 0 0 29.76 29.17 3916.22 3916.22 0 0 0 49.9 45.2c5.13 4.6 10.6 8.8 15.43 13.77-45.42-30.75-86.96-66.3-125.86-104.9-39.09-38.8-75.12-80.37-105.93-127-5.96 7.46-11.5 14.38-17.02 21.32-7.81 9.82-15.6 19.67-23.42 29.5-8.23 10.33-16.49 20.65-24.85 31.3ZM485 255c-1-.12-2-.6-3-1.06l.28-.94c.65.09 1.3.17 2.34.26.38.47.38.93.38 1.74Z"
        />
        <path
          fill="#EB6F31"
          d="M93.2 158.1c-2.19 2.27-4.37 4.55-6.87 6.9-.31-15.04-.42-30.17-.25-45.29.14-11.53-.25-23.16 1.2-34.55 1.7-13.3 4.07-26.74 8.18-39.45 2.59-8.01 8.6-15 13.64-22.05 2.33-3.26 5.83-6.1 10.59-3.85 4 1.9 7.2 8.4 6.43 12.93-.3 1.78-.31 3.73-1.08 5.3-2.23 4.58.45 7.27 3.46 9.77 4.43 3.67 9.2 6.94 13.48 10.78 9.03 8.1 17.82 16.47 27.02 24.89a20.69 20.69 0 0 1-4.53 5.52c-8.15-6.99-15.9-13.7-23.56-20.5-6.45-5.71-12.6-11.79-19.3-17.2-4.97-4.04-5.18-8.83-3.95-14.3.15-.64.56-1.33.43-1.9-.38-1.67-.98-3.3-1.49-4.95-1.6.57-3.9.66-4.69 1.8-3.5 5.1-7.38 10.18-9.67 15.86-6.73 16.73-8.13 34.65-8.96 52.38-.9 19.26-.13 38.6-.09 57.9Z"
        />
        <path
          fill="#FBD13E"
          d="M186.32 373h-3.94v-3.16h-.1c-1.5 2.5-3.8 3.75-6.86 3.75-3.04 0-5.6-1.2-7.64-3.61-2.03-2.43-3.05-5.56-3.05-9.4 0-4.02.97-7.19 2.89-9.52a9.39 9.39 0 0 1 7.61-3.49c2.97 0 5.23 1.13 6.78 3.4h.1v-12.33h4.21V373Zm-10.45-2.88c1.84 0 3.4-.76 4.69-2.28 1.28-1.51 1.92-3.8 1.92-6.89 0-3.03-.59-5.44-1.76-7.24a5.66 5.66 0 0 0-5.04-2.7c-2.19 0-3.84.89-4.97 2.65-1.1 1.75-1.66 4.06-1.66 6.92 0 2.06.3 3.81.89 5.25a7.07 7.07 0 0 0 2.53 3.2 6.03 6.03 0 0 0 3.4 1.09Zm21.44-27.66c0 1.13-.07 2.1-.2 2.93a6.03 6.03 0 0 1-1.04 2.46 6.14 6.14 0 0 1-2.6 2.02l-1.06-1.64c1.7-.7 2.57-2.25 2.58-4.7h-2.2v-4.89h4.52v3.82ZM236.48 373h-5.78l-4.53-11.76h-16.14L205.76 373h-5.4l14.84-38.65h5.5L236.49 373Zm-11.87-15.82c-3.16-8.37-4.95-13.11-5.35-14.24-.4-1.14-.85-2.66-1.35-4.56h-.13c-.49 2.6-1.15 5.01-1.97 7.22l-4.33 11.58h13.13ZM244.78 373h-4.74v-27.98h4.74V373Zm0-33.27h-4.74v-5.38h4.74v5.38Zm29.9 33.27h-4.43v-3.56h-.1c-1.7 2.81-4.28 4.22-7.73 4.22-3.43 0-6.3-1.35-8.6-4.06-2.28-2.73-3.42-6.25-3.42-10.58 0-4.51 1.08-8.08 3.24-10.7a10.56 10.56 0 0 1 8.57-3.93c3.34 0 5.88 1.28 7.62 3.82h.1v-13.86h4.75V373Zm-11.76-3.24c2.08 0 3.83-.86 5.28-2.56 1.44-1.7 2.16-4.29 2.16-7.75 0-3.41-.66-6.13-1.98-8.15a6.37 6.37 0 0 0-5.67-3.03c-2.46 0-4.32 1-5.59 2.98-1.25 1.97-1.87 4.56-1.87 7.77 0 2.33.33 4.3 1 5.91a7.96 7.96 0 0 0 2.85 3.61 6.78 6.78 0 0 0 3.82 1.22Zm43.5-9.55h-20.95c.19 3.1 1.07 5.46 2.63 7.1a7.89 7.89 0 0 0 5.91 2.45c1.81 0 3.33-.48 4.56-1.43a9 9 0 0 0 2.82-4.35l4.88.6a11.94 11.94 0 0 1-4.35 6.73c-2.1 1.57-4.75 2.35-7.91 2.35-4.2 0-7.49-1.28-9.86-3.85-2.36-2.58-3.53-6.1-3.53-10.57 0-4.42 1.14-8 3.42-10.74 2.3-2.74 5.54-4.1 9.7-4.1 2.05 0 4 .44 5.89 1.34 1.9.9 3.5 2.42 4.82 4.58 1.32 2.15 1.98 5.44 1.98 9.9Zm-4.87-3.9c-.2-2.85-1.08-4.9-2.66-6.14a8 8 0 0 0-5.14-1.9c-2.24 0-4.07.75-5.51 2.24a9.37 9.37 0 0 0-2.51 5.8h15.82Z"
        />
        <path
          fill="#3CAAD3"
          d="M165.16 301.67h6.67c1.17 0 2.18.06 3.02.19a6.56 6.56 0 0 1 4.43 2.77c.58.8 1.03 1.74 1.36 2.8.33 1.04.5 2.3.5 3.8 0 2.85-.68 5.2-2.03 7.03-1.35 1.83-3.68 2.74-6.99 2.74h-6.96v-19.33Zm2.56 17.04h4.14c.84 0 1.6-.06 2.25-.16.67-.1 1.34-.4 2.02-.86a5.05 5.05 0 0 0 1.7-2.3c.45-1.06.67-2.46.67-4.21 0-.97-.08-1.87-.26-2.7a6.16 6.16 0 0 0-.95-2.3c-.46-.7-.98-1.2-1.58-1.51a4.94 4.94 0 0 0-1.75-.6c-.57-.07-1.3-.1-2.18-.1h-4.06v14.74Zm28.75-4.1H186c.1 1.54.54 2.72 1.32 3.54.8.82 1.78 1.23 2.95 1.23.9 0 1.67-.24 2.28-.71a4.5 4.5 0 0 0 1.42-2.18l2.43.3a5.97 5.97 0 0 1-2.17 3.37 6.46 6.46 0 0 1-3.96 1.17c-2.1 0-3.74-.64-4.93-1.93-1.18-1.29-1.76-3.05-1.76-5.28 0-2.2.57-4 1.71-5.37 1.15-1.37 2.77-2.05 4.85-2.05 1.02 0 2 .22 2.94.67a5.72 5.72 0 0 1 2.41 2.3c.66 1.06 1 2.71 1 4.94Zm-2.44-1.96c-.1-1.42-.54-2.44-1.33-3.07a4 4 0 0 0-2.57-.95c-1.11 0-2.03.38-2.75 1.12a4.68 4.68 0 0 0-1.26 2.9h7.91Zm-.6-11.3-2.92 3.7h-1.95l1.76-3.7h3.1Zm8.16 7.47a4.4 4.4 0 0 1 4-2.12c1.83 0 3.28.66 4.34 2a8.05 8.05 0 0 1 1.6 5.2c0 2.27-.59 4.08-1.77 5.43a5.56 5.56 0 0 1-4.33 2c-1.5 0-2.71-.6-3.62-1.8h-.06v6.85h-2.38V307h2.17v1.8h.05Zm3.68 10.56c1.1 0 2.02-.46 2.74-1.37.73-.93 1.1-2.3 1.1-4.12 0-1.71-.36-3.03-1.06-3.95a3.3 3.3 0 0 0-5.46.16 6.82 6.82 0 0 0-1.08 4c0 1.72.35 3.04 1.04 3.93.7.9 1.6 1.35 2.72 1.35ZM226.5 321h-2.49a5.32 5.32 0 0 1-.48-1.73 7.75 7.75 0 0 1-5.16 2.06 5.16 5.16 0 0 1-3.5-1.1 3.68 3.68 0 0 1-1.27-2.94c0-1.16.4-2.1 1.22-2.86.83-.75 2.26-1.25 4.29-1.5l2.21-.33c.83-.13 1.51-.3 2.05-.49 0-.7-.02-1.2-.07-1.5a2.2 2.2 0 0 0-1.42-1.69 5.16 5.16 0 0 0-1.91-.29 4.5 4.5 0 0 0-2.43.57c-.59.38-1 1.08-1.21 2.11l-2.32-.3c.25-1.44.9-2.51 1.96-3.23 1.06-.72 2.5-1.08 4.35-1.08 1.68 0 2.91.25 3.7.75a3 3 0 0 1 1.44 1.79c.19.7.28 1.6.28 2.72v3.19c0 1.94.04 3.24.1 3.91.09.66.3 1.3.66 1.94Zm-3.13-6.16V314c-1.24.4-2.76.74-4.55.99-1.8.23-2.69.99-2.69 2.26 0 .64.24 1.18.72 1.6.49.41 1.18.62 2.09.62 1.17 0 2.2-.35 3.08-1.04.9-.7 1.35-1.9 1.35-3.58Zm13.58-7.4-.82 2.2a3.42 3.42 0 0 0-1.73-.52c-.89 0-1.56.4-2.02 1.2-.45.8-.68 1.9-.68 3.34V321h-2.37v-13.99h2.16v2.11h.05c.76-1.62 1.75-2.42 2.97-2.42.8 0 1.62.25 2.44.75Zm6.9 13.53c-.7.14-1.3.21-1.78.21-1.03 0-1.79-.18-2.26-.54a2.25 2.25 0 0 1-.87-1.4c-.1-.56-.16-1.34-.16-2.34v-8.05h-1.73V307h1.73v-3.48l2.37-1.43V307h2.38v1.84h-2.38v8.18c0 .7.07 1.2.21 1.5.15.3.52.44 1.11.44.34 0 .7-.04 1.06-.1l.32 2.1Zm14.22-6.36h-10.48c.1 1.54.53 2.72 1.31 3.54.8.82 1.78 1.23 2.96 1.23.9 0 1.66-.24 2.28-.71a4.5 4.5 0 0 0 1.4-2.18l2.45.3a5.97 5.97 0 0 1-2.18 3.37 6.46 6.46 0 0 1-3.95 1.17c-2.1 0-3.75-.64-4.93-1.93-1.18-1.29-1.77-3.05-1.77-5.28 0-2.2.57-4 1.71-5.37 1.16-1.37 2.77-2.05 4.86-2.05 1.02 0 2 .22 2.94.67a5.72 5.72 0 0 1 2.4 2.3c.67 1.06 1 2.71 1 4.94Zm-2.44-1.96c-.1-1.42-.54-2.44-1.33-3.07a4 4 0 0 0-2.57-.95c-1.12 0-2.04.38-2.76 1.12a4.68 4.68 0 0 0-1.25 2.9h7.9ZM279.9 321h-2.37v-8.83c0-.65-.05-1.2-.14-1.66a2.23 2.23 0 0 0-.68-1.23c-.36-.36-.93-.54-1.7-.54-.93 0-1.74.32-2.41.97-.68.66-1.02 1.71-1.02 3.17V321h-2.37v-9.1c0-1.21-.22-2.04-.65-2.49-.42-.45-1.02-.67-1.8-.67a3.3 3.3 0 0 0-2.52 1.05c-.65.7-.98 2.02-.98 3.95V321h-2.37v-13.99h2.13v1.95h.06a4.63 4.63 0 0 1 4.18-2.26c1.02 0 1.87.2 2.53.62.66.4 1.15 1.01 1.45 1.83a4.85 4.85 0 0 1 4.3-2.45c1.46 0 2.54.39 3.26 1.17.73.78 1.1 1.95 1.1 3.52V321Zm15.69-6.4H285.1c.1 1.55.53 2.73 1.31 3.55.8.82 1.78 1.23 2.96 1.23.9 0 1.66-.24 2.28-.71a4.5 4.5 0 0 0 1.4-2.18l2.45.3a5.96 5.96 0 0 1-2.18 3.37 6.46 6.46 0 0 1-3.95 1.17c-2.1 0-3.75-.64-4.93-1.93-1.18-1.29-1.77-3.05-1.77-5.28 0-2.2.57-4 1.71-5.37 1.16-1.37 2.77-2.05 4.86-2.05 1.02 0 2 .22 2.94.67a5.73 5.73 0 0 1 2.4 2.3c.67 1.06 1 2.71 1 4.94Zm-2.44-1.95c-.1-1.42-.54-2.44-1.33-3.07a4 4 0 0 0-2.57-.95c-1.12 0-2.04.38-2.76 1.12a4.69 4.69 0 0 0-1.25 2.9h7.9Zm16.74 8.35h-2.38v-8.5c0-1.44-.26-2.42-.78-2.96a2.8 2.8 0 0 0-2.14-.8c-.7 0-1.37.17-2 .51-.63.35-1.07.83-1.33 1.45-.27.63-.4 1.51-.4 2.65V321h-2.37v-13.99h2.13V309h.06a4.9 4.9 0 0 1 4.4-2.3c.74 0 1.47.14 2.19.4a3.78 3.78 0 0 1 2.47 2.87c.1.6.15 1.41.15 2.43V321Zm9.06-.03c-.7.14-1.3.21-1.78.21-1.04 0-1.8-.18-2.27-.54a2.26 2.26 0 0 1-.87-1.4 13.5 13.5 0 0 1-.16-2.34v-8.05h-1.72V307h1.72v-3.48l2.38-1.43V307h2.37v1.84h-2.37v8.18c0 .7.07 1.2.2 1.5.16.3.53.44 1.11.44.35 0 .7-.04 1.06-.1l.33 2.1Zm14.18.03h-2.49a5.3 5.3 0 0 1-.49-1.73 7.75 7.75 0 0 1-5.15 2.06 5.16 5.16 0 0 1-3.5-1.1 3.68 3.68 0 0 1-1.27-2.94c0-1.16.4-2.1 1.22-2.86.83-.75 2.26-1.25 4.29-1.5l2.21-.33c.83-.13 1.51-.3 2.05-.49 0-.7-.02-1.2-.07-1.5a2.2 2.2 0 0 0-1.42-1.69 5.16 5.16 0 0 0-1.91-.29 4.5 4.5 0 0 0-2.43.57c-.59.38-1 1.08-1.21 2.11l-2.32-.3c.25-1.44.9-2.51 1.96-3.23 1.05-.72 2.5-1.08 4.35-1.08 1.68 0 2.91.25 3.7.75a3 3 0 0 1 1.44 1.79c.19.7.28 1.6.28 2.72v3.19c0 1.94.03 3.24.1 3.91.08.66.3 1.3.66 1.94Zm-3.13-6.16V314c-1.24.4-2.76.74-4.55.99-1.8.23-2.7.99-2.7 2.26 0 .64.25 1.18.73 1.6.49.41 1.18.62 2.09.62 1.17 0 2.2-.35 3.08-1.04.9-.7 1.35-1.9 1.35-3.58Zm8.4 6.16h-2.36v-19.33h2.37V321Z"
        />
        <path
          fill="#A8458B"
          d="M181.61 403h-3.5a7.52 7.52 0 0 1-.7-2.43 10.91 10.91 0 0 1-7.25 2.9c-2.07 0-3.71-.53-4.91-1.57a5.18 5.18 0 0 1-1.8-4.11 5.2 5.2 0 0 1 1.72-4.03c1.17-1.06 3.18-1.77 6.03-2.12l3.12-.46a16.2 16.2 0 0 0 2.88-.69c0-1-.03-1.7-.1-2.11a3.09 3.09 0 0 0-2-2.38 7.29 7.29 0 0 0-2.7-.4c-1.43 0-2.56.26-3.4.8-.83.53-1.4 1.52-1.71 2.96l-3.27-.42a6.64 6.64 0 0 1 2.77-4.55c1.48-1.01 3.52-1.52 6.12-1.52 2.36 0 4.1.35 5.2 1.06 1.1.69 1.79 1.53 2.04 2.52.26.99.39 2.26.39 3.82v4.5c0 2.73.05 4.56.15 5.5.1.93.41 1.84.92 2.73Zm-4.41-8.67v-1.2a36.12 36.12 0 0 1-6.4 1.4c-2.53.32-3.79 1.39-3.79 3.18 0 .9.34 1.65 1.02 2.25a4.4 4.4 0 0 0 2.93.87c1.65 0 3.1-.49 4.34-1.47 1.26-.99 1.9-2.66 1.9-5.03Zm-2.53-13.78h-2.74l-4.1-5.22h4.38l2.46 5.22Zm23.36-4.75h9.4c1.64 0 3.05.08 4.24.26a9.21 9.21 0 0 1 6.23 3.9 13.5 13.5 0 0 1 1.92 3.93c.47 1.47.7 3.26.7 5.36 0 4-.95 7.3-2.86 9.9-1.9 2.56-5.18 3.85-9.83 3.85h-9.8v-27.2Zm3.6 23.97h5.83c1.19 0 2.24-.07 3.17-.22a6.95 6.95 0 0 0 2.84-1.2 7.1 7.1 0 0 0 2.4-3.24c.63-1.5.94-3.47.94-5.93 0-1.36-.12-2.63-.37-3.8a8.68 8.68 0 0 0-1.34-3.24 6.16 6.16 0 0 0-2.22-2.13 6.94 6.94 0 0 0-2.47-.83c-.8-.1-1.81-.15-3.06-.15h-5.72v20.74Zm31.38-16.9c2.66 0 4.86.86 6.6 2.6 1.76 1.73 2.64 4.19 2.64 7.38 0 3.87-.95 6.61-2.84 8.22a9.67 9.67 0 0 1-6.4 2.4 9.37 9.37 0 0 1-6.48-2.47c-1.83-1.65-2.74-4.26-2.74-7.83 0-3.47.88-6.05 2.65-7.74a9.1 9.1 0 0 1 6.57-2.56Zm0 17.85c1.9 0 3.35-.7 4.34-2.12.99-1.4 1.49-3.26 1.49-5.56 0-2.47-.57-4.32-1.7-5.57a5.32 5.32 0 0 0-4.13-1.87c-1.7 0-3.09.63-4.18 1.9-1.09 1.27-1.63 3.15-1.63 5.67 0 2.5.55 4.38 1.65 5.65a5.32 5.32 0 0 0 4.16 1.9Zm39.82 2.28h-3.34v-12.43c0-.92-.06-1.7-.19-2.34a3.16 3.16 0 0 0-.96-1.73c-.51-.5-1.3-.76-2.4-.76-1.3 0-2.44.46-3.4 1.38-.94.91-1.42 2.4-1.42 4.45V403h-3.34v-12.8c0-1.71-.3-2.88-.91-3.51-.6-.63-1.44-.95-2.54-.95-1.44 0-2.62.5-3.55 1.49-.91.99-1.37 2.84-1.37 5.55V403h-3.34v-19.69h3v2.75h.08a6.52 6.52 0 0 1 5.88-3.2c1.45 0 2.64.3 3.57.88a4.84 4.84 0 0 1 2.04 2.58 6.83 6.83 0 0 1 6.06-3.45c2.05 0 3.57.55 4.59 1.65 1.02 1.1 1.54 2.75 1.54 4.95V403Zm8.31 0h-3.34v-19.69h3.34V403Zm0-23.42h-3.34v-3.78h3.34v3.78Zm21.25 16.61c-.44 2.51-1.43 4.36-2.97 5.53a8.52 8.52 0 0 1-5.25 1.74c-2.86 0-5.07-.93-6.63-2.8-1.56-1.88-2.34-4.36-2.34-7.46 0-2.56.45-4.6 1.34-6.14a7.65 7.65 0 0 1 3.38-3.25 9.92 9.92 0 0 1 4.25-.94c2.02 0 3.75.52 5.19 1.57a6.81 6.81 0 0 1 2.67 4.64l-3.23.5a5.75 5.75 0 0 0-1.63-2.98c-.74-.67-1.7-1-2.86-1-1.86 0-3.28.66-4.25 1.98-.96 1.32-1.44 3.17-1.44 5.55 0 2.42.47 4.3 1.4 5.62a4.76 4.76 0 0 0 4.1 1.97c1.44 0 2.57-.41 3.38-1.23.83-.83 1.35-2.06 1.56-3.7l3.32.4Zm6.21 6.81h-3.34v-19.69h3.34V403Zm0-23.42h-3.34v-3.78h3.34v3.78Zm8.46 23.42h-3.34v-27.2h3.34V403Zm22.23-9h-14.75c.13 2.18.75 3.84 1.85 5a5.54 5.54 0 0 0 4.16 1.72 5.1 5.1 0 0 0 3.21-1 6.33 6.33 0 0 0 1.99-3.07l3.43.43a8.4 8.4 0 0 1-3.06 4.73 9.09 9.09 0 0 1-5.57 1.65c-2.96 0-5.27-.9-6.94-2.7-1.66-1.82-2.49-4.3-2.49-7.45 0-3.1.8-5.62 2.42-7.55 1.62-1.93 3.9-2.9 6.82-2.9 1.44 0 2.82.32 4.14.95a8.04 8.04 0 0 1 3.4 3.23c.93 1.51 1.39 3.83 1.39 6.96Zm-3.43-2.75c-.14-2-.76-3.44-1.88-4.32a5.63 5.63 0 0 0-3.62-1.33c-1.57 0-2.86.52-3.87 1.57a6.58 6.58 0 0 0-1.76 4.08h11.13Z"
        />
        <path
          fill="#E46C3E"
          d="M175.1 270.08h7.08c1.05 0 2.05-.08 3.02-.24a7.39 7.39 0 0 0 2.55-.87 4.9 4.9 0 0 0 1.74-1.91c.47-.81.7-1.88.7-3.19a6.4 6.4 0 0 0-.7-3.19c-.42-.81-1-1.43-1.74-1.86a6.71 6.71 0 0 0-2.55-.92c-.97-.16-1.97-.24-3.02-.24h-7.07v12.42Zm-9.1-19.5h18.68c2.59 0 4.8.4 6.61 1.17a11.8 11.8 0 0 1 4.4 2.96c1.17 1.23 2 2.65 2.5 4.23a15.16 15.16 0 0 1 0 9.86c-.5 1.58-1.33 3-2.5 4.23a12.38 12.38 0 0 1-4.4 3.02c-1.82.74-4.02 1.1-6.61 1.1h-9.57V292H166v-41.41ZM231.95 292h-7.83v-4.18h-.18a9.27 9.27 0 0 1-4.06 3.77 11.99 11.99 0 0 1-5.1 1.16c-2.2 0-4.02-.29-5.45-.87a7.96 7.96 0 0 1-3.3-2.43 10.22 10.22 0 0 1-1.75-3.89 26.02 26.02 0 0 1-.46-5.1V262h8.23v16.94c0 2.48.39 4.33 1.16 5.57.78 1.2 2.15 1.8 4.12 1.8 2.24 0 3.87-.66 4.87-1.98 1-1.35 1.51-3.55 1.51-6.6V262h8.24V292Zm28.23-14.96c0-1.28-.13-2.5-.4-3.66a9.53 9.53 0 0 0-1.28-3.07 6.32 6.32 0 0 0-5.34-2.9 6.33 6.33 0 0 0-5.34 2.9c-.57.89-1 1.91-1.27 3.07a16.07 16.07 0 0 0 0 7.25c.27 1.16.7 2.19 1.28 3.08.58.89 1.31 1.6 2.2 2.14.89.5 1.93.76 3.13.76 1.24 0 2.28-.25 3.13-.76a6.86 6.86 0 0 0 2.2-2.14c.59-.9 1.01-1.92 1.28-3.08.28-1.16.41-2.36.41-3.6Zm-21.98-26.45h8.23v15.08h.12a8.64 8.64 0 0 1 4.06-3.37c1.74-.73 3.54-1.1 5.4-1.1a11.4 11.4 0 0 1 8.4 3.77 14.2 14.2 0 0 1 2.9 4.93 20.3 20.3 0 0 1 1.1 7.08c0 2.74-.36 5.12-1.1 7.13a14.3 14.3 0 0 1-2.9 4.87 11.4 11.4 0 0 1-8.41 3.77c-2.2 0-4.17-.34-5.91-1.04a7.51 7.51 0 0 1-3.95-3.54h-.11V292h-7.83v-41.41Zm35.69 0h8.23V292h-8.23v-41.41Zm23.19 6.78h-8.24v-6.78h8.24v6.78Zm-8.24 4.64h8.24V292h-8.24v-29.99Zm35.14 10.56c-.54-3.44-2.57-5.16-6.1-5.16-1.3 0-2.4.3-3.3.93a7.04 7.04 0 0 0-2.2 2.32c-.54.92-.93 1.97-1.16 3.13a16.56 16.56 0 0 0 0 6.67c.23 1.12.6 2.14 1.1 3.07a6.86 6.86 0 0 0 2.15 2.2c.88.59 1.97.88 3.24.88 1.98 0 3.48-.55 4.53-1.63a7.87 7.87 0 0 0 2.03-4.46h7.94c-.54 3.98-2.08 7.01-4.64 9.1-2.55 2.09-5.82 3.13-9.8 3.13-2.24 0-4.31-.36-6.2-1.1a14.1 14.1 0 0 1-7.83-8c-.74-1.9-1.1-3.96-1.1-6.2 0-2.33.32-4.47.98-6.45.7-2 1.7-3.73 3.02-5.16a13.5 13.5 0 0 1 4.81-3.42c1.9-.81 4.06-1.22 6.5-1.22 1.77 0 3.48.23 5.1.7a13 13 0 0 1 4.4 2.14 10.8 10.8 0 0 1 4.59 8.53h-8.06Z"
        />
        <path
          fill="#38B065"
          d="M198.97 244h-6.2c-3.7-5.86-6-9.45-6.9-10.8a20.26 20.26 0 0 0-2.85-3.42 6.9 6.9 0 0 0-2.79-1.83c-.86-.25-2.01-.38-3.45-.38h-5.69V244h-4.93v-37.22h16.48c2.25 0 4.14.14 5.67.43a8.9 8.9 0 0 1 6.65 5.3c.62 1.41.94 2.9.94 4.45 0 2.8-.9 5.07-2.67 6.78-1.78 1.7-4.37 2.8-7.77 3.25v.1c2.49 1.1 4.82 3.36 7 6.78l6.5 10.13Zm-27.88-20.85h10.56c2.13 0 3.82-.17 5.06-.53a5.48 5.48 0 0 0 3-2.13 5.95 5.95 0 0 0 1.1-3.53c0-1.7-.6-3.13-1.84-4.32-1.24-1.18-3.28-1.77-6.12-1.77h-11.76v12.28Zm55.38 8.54h-20.19c.19 2.97 1.03 5.25 2.54 6.83a7.6 7.6 0 0 0 5.69 2.36c1.74 0 3.2-.46 4.39-1.37a8.66 8.66 0 0 0 2.72-4.2l4.7.59a11.5 11.5 0 0 1-4.2 6.47c-2.03 1.51-4.56 2.26-7.61 2.26-4.05 0-7.21-1.23-9.5-3.7-2.27-2.5-3.4-5.88-3.4-10.18 0-4.25 1.1-7.7 3.3-10.34 2.22-2.64 5.33-3.96 9.34-3.96 1.97 0 3.85.43 5.67 1.3 1.82.86 3.37 2.33 4.64 4.41 1.27 2.07 1.9 5.24 1.9 9.53Zm-4.7-3.76c-.19-2.74-1.04-4.72-2.56-5.92a7.7 7.7 0 0 0-4.96-1.83c-2.15 0-3.91.72-5.3 2.16a9.02 9.02 0 0 0-2.41 5.59h15.23Zm-1.17-21.79-5.61 7.14h-3.76l3.38-7.14h6Zm26.43 18.46a4.65 4.65 0 0 0-1.8-3.3c-.98-.74-2.35-1.12-4.11-1.12-1.75 0-3.16.3-4.24.9-1.07.58-1.6 1.45-1.6 2.58 0 1.07.42 1.83 1.27 2.29.86.45 2.55 1.01 5.07 1.67 2.85.73 4.97 1.37 6.38 1.93a7.48 7.48 0 0 1 3.3 2.36c.8 1 1.2 2.4 1.2 4.2 0 2.4-.99 4.42-2.95 6.06-1.97 1.64-4.59 2.47-7.87 2.47-3.42 0-6.1-.72-8.03-2.16-1.91-1.46-3.09-3.63-3.53-6.53l4.55-.68c.24 1.88.93 3.28 2.08 4.21 1.17.93 2.8 1.4 4.88 1.4 2 0 3.52-.42 4.6-1.25a3.8 3.8 0 0 0 1.59-3.07c0-.81-.25-1.46-.74-1.96a4.5 4.5 0 0 0-1.85-1.09c-.73-.25-2.38-.69-4.95-1.32-3.83-.91-6.36-2.02-7.6-3.32a6.6 6.6 0 0 1-1.82-4.68c0-2.25.9-4.1 2.7-5.56 1.78-1.45 4.2-2.18 7.23-2.18 3.21 0 5.71.64 7.49 1.9 1.8 1.26 2.87 3.14 3.22 5.64l-4.47.61Zm34.38 7.09h-20.18c.18 2.97 1.03 5.25 2.54 6.83a7.6 7.6 0 0 0 5.68 2.36c1.75 0 3.21-.46 4.4-1.37a8.66 8.66 0 0 0 2.71-4.2l4.7.59a11.5 11.5 0 0 1-4.19 6.47c-2.03 1.51-4.57 2.26-7.62 2.26-4.04 0-7.2-1.23-9.5-3.7-2.26-2.5-3.4-5.88-3.4-10.18 0-4.25 1.1-7.7 3.3-10.34 2.22-2.64 5.34-3.96 9.35-3.96 1.96 0 3.85.43 5.66 1.3 1.83.86 3.38 2.33 4.65 4.41 1.27 2.07 1.9 5.24 1.9 9.53Zm-4.7-3.76c-.18-2.74-1.04-4.72-2.56-5.92a7.7 7.7 0 0 0-4.95-1.83c-2.15 0-3.92.72-5.3 2.16a9.02 9.02 0 0 0-2.42 5.59h15.23Zm33.6 16.07h-4.8a10.3 10.3 0 0 1-.94-3.33c-3.06 2.64-6.38 3.97-9.93 3.97-2.84 0-5.09-.72-6.73-2.14a7.1 7.1 0 0 1-2.46-5.63c0-2.24.79-4.08 2.36-5.52 1.6-1.45 4.34-2.41 8.25-2.89l4.27-.63c1.59-.26 2.9-.57 3.93-.94 0-1.37-.04-2.34-.12-2.9a4.23 4.23 0 0 0-2.75-3.25 9.98 9.98 0 0 0-3.68-.56c-1.96 0-3.52.37-4.67 1.1-1.13.72-1.91 2.08-2.34 4.06l-4.46-.59c.49-2.75 1.75-4.83 3.78-6.22 2.03-1.38 4.82-2.08 8.38-2.08 3.23 0 5.6.48 7.1 1.45 1.53.95 2.46 2.1 2.8 3.45.36 1.36.53 3.1.53 5.23v6.15c0 3.74.07 6.25.2 7.54a9.88 9.88 0 0 0 1.28 3.73Zm-6.05-11.86v-1.65a49.2 49.2 0 0 1-8.76 1.9c-3.45.46-5.18 1.92-5.18 4.37a3.9 3.9 0 0 0 1.4 3.08c.93.8 2.27 1.19 4.01 1.19 2.25 0 4.23-.67 5.94-2 1.73-1.36 2.6-3.65 2.6-6.89ZM337.73 244h-4.09v-3.96h-.13c-2.06 3.06-4.88 4.6-8.45 4.6a10.9 10.9 0 0 1-5.23-1.3 6.61 6.61 0 0 1-3.2-3.6 18.85 18.85 0 0 1-.79-5.97v-16.7h4.57v14.92c0 2.39.11 4.1.33 5.13a4.24 4.24 0 0 0 1.8 2.56c.97.66 2.12 1 3.46 1a7.8 7.8 0 0 0 4.87-1.78c1.53-1.2 2.29-3.69 2.29-7.44v-14.4h4.57V244Z"
        />
      </svg>
    </div>
  )
}
export default Logo
