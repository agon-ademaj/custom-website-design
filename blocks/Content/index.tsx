import React from 'react';
import { Block } from 'payload/types';
import RichText from '../../components/RichText';
import classes from './index.module.css';

export type Type = {
  blockType: 'content';
  blockName?: string;
  content: unknown;
};

export const Content: Block = {
  slug: 'content',
  labels: {
    singular: 'Content',
    plural: 'Content Blocks',
  },
  fields: [
    {
      name: 'backgroundColor',
      label: 'Background Color',
      defaultValue: 'none',
      type: 'radio',
      admin: {
        layout: 'horizontal',
      },
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'Red',
          value: 'red',
        },
        {
          label: 'Blue',
          value: 'blue',
        },
        {
          label: 'Orange',
          value: 'orange',
        },
      ],
    },
    {
      name: 'columns',
      type: 'array',
      minRows: 1,
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'width',
              label: 'Width',
              type: 'select',
              required: true,
              defaultValue: 'full',
              options: [
                {
                  label: 'One Third',
                  value: 'oneThird',
                },
                {
                  label: 'Half',
                  value: 'half',
                },
                {
                  label: 'Two Thirds',
                  value: 'twoThirds',
                },
                {
                  label: 'Full Width',
                  value: 'full',
                },
              ],
              admin: {
                width: '50%',
              },
            },
            {
              name: 'alignment',
              label: 'Alignment',
              type: 'select',
              defaultValue: 'left',
              required: true,
              options: [
                {
                  label: 'Left',
                  value: 'left',
                },
                {
                  label: 'Center',
                  value: 'center',
                },
                {
                  label: 'Right',
                  value: 'right',
                },
              ],
              admin: {
                width: '50%',
              },
            },
          ],
        },
        {
          name: 'content',
          type: 'richText',
          required: true,
        },
      ],
    },
    {
      name: 'accentLine',
      label: 'Enable Accent Line',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'accentLineAlignment',
      label: 'Accent Line Alignment',
      type: 'radio',
      defaultValue: 'left',
      options: [
        {
          label: 'Left',
          value: 'left',
        },
        {
          label: 'Right',
          value: 'right',
        },
      ],
      admin: {
        condition: (_, siblingData) => siblingData.accentLine,
        layout: 'horizontal',
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'paddingTop',
          label: 'Padding Top',
          type: 'select',
          defaultValue: 'medium',
          options: [
            {
              label: 'Small',
              value: 'small',
            },
            {
              label: 'Medium',
              value: 'medium',
            },
            {
              label: 'Large',
              value: 'large',
            },
          ],
          admin: {
            width: '50%',
          },
        },
        {
          name: 'paddingBottom',
          label: 'Padding Bottom',
          type: 'select',
          defaultValue: 'medium',
          options: [
            {
              label: 'Small',
              value: 'small',
            },
            {
              label: 'Medium',
              value: 'medium',
            },
            {
              label: 'Large',
              value: 'large',
            },
          ],
          admin: {
            width: '50%',
          },
        },
      ],
    },
  ],
};

export const Component: React.FC<Type> = (props) => {
  const { content } = props;

  return (
    <div className={classes.wrap}>
      <RichText content={content} className={classes.content} />
    </div>
  );
};

export default Content;
