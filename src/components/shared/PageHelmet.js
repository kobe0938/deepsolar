import React from 'react';
import { Helmet } from "react-helmet";

const PageHelmet = ({ pageTitle }) => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title> Stanford DeepSolar </title>
                <meta name="robots" content="noindex, follow" />
                <meta name="description" content="Stanford DeepSolar Research" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            </Helmet>
        </>
    );
};

export default PageHelmet;