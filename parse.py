from graphviz import Digraph
import re
import unittest

NODE_REGEXP = '(-+)>\s*(.*)'

class Node:
    def __init__(self, i, level, label):
        self.id = i
        self.level = level
        self.label = label

    def add_to_dot(self, dot):
        dot.node(str(self.id), self.label)

def parse(source):
    i = 0
    dot = Digraph()
    dot.attr('node', shape='box')
    dot.attr('graph', nodesep='0.2')

    currents = {}
    
    for line in source.split('\n'):
        match = re.match(NODE_REGEXP, line)
        if match:
            level = len(match.group(1))-1
            label = match.group(2).rstrip()
            if level != 0 and not level-1 in currents:
                continue
            current = Node(i, level, label)
            i += 1
            current.add_to_dot(dot)
            currents[level] = current

            if level > 0:
                parent = currents[level-1]
                dot.edge(str(parent.id), str(current.id))

    return dot

if __name__ == '__main__':
    source = """
-> Aristote
--> La Nature
--> La Raison
"""
    dot = parse(source)
    dot.format = 'png'
    dot.render(cleanup=True)
