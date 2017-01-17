import React from 'react';

const Attributes = ({ attributes }) => {
  const attrs = [...(attributes || [])];

  return (
    <span>
      {attrs.map((a) => (<span>{a.name}="{a.value}"</span>))}
    </span>
  );
};

const Node = ({ node, expanded }) => {
  window.node = node;
  const children = [...(node.children || [])];

  return (
    <div>
      <span>&lt;{node.localName} <Attributes attributes={node.attributes} />&gt;</span>
      {expanded && (
        <div>
          {children.map((n, i) => <Node key={i} node={n} expanded={true} />)}
        </div>
      )}
      {expanded && (
        <span>&lt;/{node.localName}&gt;</span>
      )}
      {!expanded && '...' }
    </div>
  );
  return <span>node</span>
};

class XMLViewer extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: false
    };
  }

  render() {
    const { xml } = this.props;

    const parser = new DOMParser();
    const dom = parser.parseFromString(xml, 'text/xml').firstChild;

    return (
      <div onClick={() => this.setState({ expanded: !this.state.expanded })}>
        <Node node={dom} expanded={this.state.expanded}/>
      </div>
    );
  }
};

export default XMLViewer;

