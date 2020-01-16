export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e20d43b3f285b7881a74bc0',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-38bd5xpp',
                  apiId: 'ed0fd17e-1311-4ba3-9830-2d4c98ed0662'
                },
                {
                  buildHookId: '5e20d43b27684e016c2dd1d0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-b28um2z4',
                  apiId: '112baaba-6164-4673-a3e4-d22bb01b3e39'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/skifire1983/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-b28um2z4.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
