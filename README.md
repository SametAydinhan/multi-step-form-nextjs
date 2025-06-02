# Multi-Step Form (Next.js)

This project is a multi-step onboarding form application built with [Next.js](https://nextjs.org) and the modern React ecosystem. It is designed to simplify the onboarding process for new users.

## Features

- Multi-step user registration/onboarding form
- Form validation using [zod](https://zod.dev/) and [react-hook-form](https://react-hook-form.com/)
- Stylish and accessible UI with [Chakra UI](https://chakra-ui.com/)
- Next.js App Router architecture
- Easily extendable and customizable structure

## Technologies and Libraries Used

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/) (component library)
- [react-hook-form](https://react-hook-form.com/) (form management)
- [zod](https://zod.dev/) (schema-based validation)
- [@hookform/resolvers](https://react-hook-form.com/docs/useform/#resolver) (zod integration)
- [TypeScript](https://www.typescriptlang.org/) (type safety)
- [Geist Font](https://vercel.com/font) (modern font)

## Project Structure

```
src/
  app/
    components/
    layout.tsx
    page.tsx
  personel-info.tsx
  work-info.tsx
  more-details.tsx
  onboarding-form.tsx
public/
  ...
```

- `src/personel-info.tsx`, `src/work-info.tsx`, `src/more-details.tsx`: Components representing each step of the form.
- `src/onboarding-form.tsx`: Main component for the multi-step form.
- `src/app/layout.tsx`: Application-wide layout and providers.
- `public/`: Static files (icons, images, etc.)

## Installation and Running

After cloning the project, install dependencies and start the development server:

```bash
npm install
npm run dev
# or
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Usage

1. Start the onboarding form on the home page.
2. The user is asked for personal information, work information, and additional details in sequence.
3. Form validation is performed at each step, and missing or incorrect fields are shown to the user.
4. On the final step, all information is collected and can be processed (e.g., sent to an API).

## Screenshots

Here are some screenshots of the application:
![image](https://github.com/user-attachments/assets/16388bf3-88f8-48ee-9496-7be12128d1ac)
![image](https://github.com/user-attachments/assets/1b508e2c-60ca-4dff-9514-ec0e863b7ae1)
![image](https://github.com/user-attachments/assets/efe0408e-2621-40b6-a66a-3eaaf616886e)
![image](https://github.com/user-attachments/assets/20344432-b257-495f-b974-331efb730bb1)



## Contribution and License

This project is licensed under the [MIT License](LICENSE). Feel free to contribute by submitting a pull request.

---

For more information, check out the [Next.js documentation](https://nextjs.org/docs).
