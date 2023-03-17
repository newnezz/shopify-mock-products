# Shopify Mock Products Generator

This Node.js application generates a CSV file with mock product data for Shopify stores. It allows you to create a specified number of products within a given category and includes product images fetched from the Pexels API.

## Features

- Generates mock product data based on a specified category
- Includes product images from the Pexels API
- Exports data to a Shopify-compatible CSV file

## Prerequisites

- Node.js (version 14 or later recommended)
- NPM (Node Package Manager)
- Pexels API key

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/shopify-mock-products.git
```

2. Change the current directory to the project folder:

```bash
cd shopify-mock-products
```

3. Install the required dependencies:

```bash
npm install
```

4. Set up the environment variables:
Create a **.env** file in the project's root directory and add your Pexels API key:

```makefile
PEXELS_API_KEY=your_pexels_api_key_here
```

Replace **your_pexels_api_key_here** with your actual Pexels API key.

## Usage

To generate mock products, run the following command:

```bash
node app.js "Category" NumberOfProducts
```

Replace **Category** with the desired product category (e.g., "Electronics") and **NumberOfProducts** with the number of products you want to generate (e.g., 10).

Example:

```bash
node app.js "Electronics" 10
```

This command will generate a CSV file named **shopify_products.csv** containing 10 mock electronic products.


## Contributing
Contributions are welcome! If you'd like to contribute, please create a fork of this repository, make your changes, and submit a pull request. If you have any questions or need assistance, feel free to open an issue.

## License
This project is licensed under the MIT License. For more information, see the **LICENSE** file.



