# Deployment

To deploy your Next.js app with PrismaDB and PlanetScale, follow the steps below. These instructions assume that you have already set up your Next.js app and integrated PrismaDB and PlanetScale into your project.

## 1. Build the Next.js App

Before deployment, ensure that your Next.js app is properly built and ready for production. Run the following command in your project directory to build the app:

```bash
npm run build
```

## 2. Configure PrismaDB

Ensure that your PrismaDB configuration is set up correctly to connect to the PlanetScale database. Make sure you have the required environment variables set up securely for your database connection, including the database URL, username, password, etc. Verify that Prisma can successfully connect to your PlanetScale database locally before proceeding to deployment.

## 3. Prepare the Database Schema and Seed Data

If your Next.js app relies on specific database schema or seed data, make sure to apply them to the PlanetScale database. You can use Prisma's migration feature to apply schema changes and seed data. Run the following commands to create and seed the database:

```bash
# Apply schema changes
npx prisma migrate dev

# Seed data (if applicable)
npx prisma db seed --preview-feature
```

## 4. Choose a Hosting Provider

Choose a hosting provider that supports Node.js applications and provides a scalable infrastructure for your Next.js app. Some popular options include Vercel, Netlify, AWS Elastic Beanstalk, and Heroku. For this example, we'll use Vercel as it integrates well with Next.js.

## 5. Create a Production Build Environment

Set up a production build environment for your Next.js app. This environment should include any necessary environment variables, including your PrismaDB connection details and API keys.

In your Next.js app's root directory, create a `.env.production` file and add the required environment variables:

```env
# Next.js environment variables
NEXT_PUBLIC_API_BASE_URL=https://api.na2r.ai
NEXT_PUBLIC_API_KEY=YOUR_API_KEY

# Prisma environment variables
DATABASE_URL=YOUR_PRISMA_DATABASE_URL
```

Ensure that you replace `YOUR_API_KEY` and `YOUR_PRISMA_DATABASE_URL` with your actual API key from Na2r AI and the connection URL for your PrismaDB database.

## 6. Deploy to Vercel

If you're using Vercel for hosting, the deployment process is straightforward. Ensure that you have the Vercel CLI installed on your machine. If you don't have it, you can install it globally with:

```bash
npm install -g vercel
```

Then, run the following command in your project directory to deploy your app:

```bash
vercel --prod
```

Follow the prompts, and Vercel will guide you through the deployment process. Once the deployment is complete, Vercel will provide you with a URL where your Next.js app is hosted.

## 7. Monitor and Scale

After deployment, monitor the performance of your Next.js app. Use tools like New Relic or Datadog to identify bottlenecks and optimize your application. Additionally, take advantage of the scaling capabilities of your hosting provider to handle increased traffic as your app gains popularity.

Congratulations! Your Next.js app with PrismaDB and PlanetScale is now deployed and ready to serve users with AI-powered features from Na2r AI.