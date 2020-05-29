define(["babel-standalone", "axios"], (Babel, axios) => {
  return {
    load: function (name, req, onload, config) {
      axios.get(req.toUrl(name) + ".js").then((response) => {
        onload.fromText(
          Babel.transform(response.data, {
            presets: ["es2015"],
            plugins: ["transform-es2015-modules-amd"],
          }).code
        );
      });
    },
  };
});
