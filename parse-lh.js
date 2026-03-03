const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./lighthouse-mobile-prod.json', 'utf8'));

console.log('--- SCORES ---');
console.log('Performance:', data.categories.performance.score * 100);
console.log('Accessibility:', data.categories.accessibility.score * 100);
console.log('Best Practices:', data.categories['best-practices'].score * 100);
console.log('SEO:', data.categories.seo.score * 100);

console.log('\n--- PERFORMANCE METRICS ---');
const audits = data.audits;
['first-contentful-paint', 'largest-contentful-paint', 'total-blocking-time', 'cumulative-layout-shift', 'speed-index'].forEach(metric => {
    const audit = audits[metric];
    console.log(`${audit.title}: ${audit.displayValue} (Score: ${audit.score * 100})`);
});

console.log('\n--- TOP OPPORTUNITIES ---');
Object.values(audits)
    .filter(a => a.details && a.details.type === 'opportunity' && a.score !== 1 && a.score !== null)
    .sort((a, b) => (b.details.overallSavingsMs || b.details.overallSavingsBytes) - (a.details.overallSavingsMs || a.details.overallSavingsBytes))
    .slice(0, 5)
    .forEach(a => {
        console.log(`- ${a.title}: ${a.displayValue || ''}`);
        if(a.details && a.details.items) {
           a.details.items.slice(0,2).forEach(item => {
               if(item.url) console.log(`  Url: ${item.url.substring(0,60)}...`);
           });
        }
    });

console.log('\n--- DIAGNOSTICS ---');
Object.values(audits)
    .filter(a => a.details && a.details.type === 'table' && a.score !== 1 && a.score !== null && a.id !== 'network-requests' && a.id !== 'network-rtt' && a.id !== 'network-server-latency' && a.id !== 'main-thread-tasks' && a.id !== 'diagnostics' && a.id !== 'metrics' && a.id !== 'screenshot-thumbnails' && a.id !== 'final-screenshot' && a.id !== 'script-treemap-data' && a.id !== 'mainthread-work-breakdown' && a.id !== 'bootup-time')
    .slice(0, 5)
    .forEach(a => {
        console.log(`- ${a.title}: ${a.displayValue || ''}`);
    });
