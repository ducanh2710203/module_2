import {TreeNode} from "./treeNode";
export interface Tree<E> {
    insert(data: E): TreeNode<E>;
    inorder(node: TreeNode<E>): void;
    getSize(): number;
}