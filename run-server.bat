@echo off
echo Installing dependencies...
npm install

echo.
echo Starting development server...
echo The website will be available at: http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.

npm run dev
