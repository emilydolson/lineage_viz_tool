# Lineage and Phylogeny Web Visualization

The most recent version of this visualization is hosted online at [https://emilydolson.github.io/lineage_viz_tool/standards_viz.html](https://emilydolson.github.io/lineage_viz_tool/standards_viz.html).

This visualization was initially developed as a proof-of-concept web tool for visualizing standardized phylogenies. However, it has proven useful in our research for quickly exploring our phylogeny data. We plan on improving the user interface and adding more features in the near future! Feel free to [file issues/feature requests](https://github.com/emilydolson/lineage_viz_tool/issues) or to contribute!

## Usage

This visualization takes standard-compliant (as defined by the [ALife phylogeny data standard](https://github.com/alife-data-standards/alife-data-standards/blob/master/phylogeny.md)) CSV input. For example input data, see the [./example_data/](./example_data/) in this repository.

You point the visualization at a particular input file using the 'Browse' button at the top of the web page.

You can use the 'Column to color by' input box to type a valid column in your CSV input file to color the phylogeny by.

### Running this visualization locally

First (if you haven't done this already), clone this repository somewhere on your
local machine, and in your terminal, navigate to the repository.

Next, you'll want to kick off a local HTTP server. You can do this easily with Python:

```
python3 -m http.server
```

Or, Python 2:

```
python2 -m SimpleHTTPServer
```

In a web browser, go to [localhost:8000](localhost:8000). If you started the web server in same directory as the standards_viz.html file, you should be able to go directly to [http://localhost:8000/standards_viz.html](http://localhost:8000/standards_viz.html); otherwise, you'll need to navigate to the standards_viz.html file in your browser.

And, that's it. Once you're here, the usage is the same as if you were running it on the web. If you make local changes to the visualization, those changes should be reflected when you refresh the page.
