import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    entry: './src/index.ts',
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
      },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.(m?js|ts)$/,
            exclude: /(node_modules)/,
            use: {
              loader: "swc-loader"
            }
          }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[contenthash].css'
        }),
     new HtmlWebpackPlugin({
        title: 'test',
        template: 'index.html',
    }),
    
],
}