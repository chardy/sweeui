const path = require("path");
const pkg = require("./package.json");
const webpackConfig = require("./config/webpack.js");

module.exports = {
  title: `${pkg.name} v${pkg.version}`,
  require: [path.resolve(__dirname, "styleguide.js")],
  components: "src/components/**/[A-Z]*.js",
  ribbon: {
    url: "https://github.com/chardy/sweeui",
    text: "Fork me on GitHub"
  },
  showSidebar: true,
  usageMode: "expand",
  skipComponentsWithoutExample: true,
  theme: {
    color: {
      link: "#167efb",
      linkHover: "#00adef"
    },
    font: ["Helvetica", "sans-serif"]
  },
  styles: {
    Ribbon: {
      root: {
        backgroundImage:
          'url("https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png")',
        backgroundSize: "50px 50px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right top"
      },
      link: {
        backgroundColor: "#167efb"
      }
    },
    StyleGuide: {
      "@global body": {
        fontFamily:
          "-apple-system,BlinkMacSystemFont,'Helvetica Neue',Helvetica,Arial,sans-serif"
      }
    },
    Heading: {
      heading2: {
        fontSize: 26
      }
    },
    ReactComponent: {
      root: {
        marginBottom: 20
      },
      header: {
        marginBottom: 0
      },
      tabs: {
        marginBottom: 0
      }
    }
  },
  sections: [
    { name: "Layout", components: "src/layouts/**/*.js", usageMode: "expand" },
    {
      name: "Components",
      components: "src/components/**/*.js",
      usageMode: "expand"
    }
  ],
  webpackConfig,
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, ".js");

    return `import { ${name} } from '${pkg.name}';`;
  }
};
